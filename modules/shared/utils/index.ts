import _ from 'lodash/fp';
import { Dimensions, PixelRatio } from 'react-native';
import { ImagePickerAsset } from 'expo-image-picker';
import {
  AssetState,
  IFormatDateRange,
  IapplyRelativeSizes,
  IisMeetingDataValid,
  formatType,
} from './type';

function isEqualDate([first, second]: string[]) {
  return _.equals(first, second);
}

function joinDate(ymd: string[]) {
  const separator = ' ~ ';

  if (isEqualDate(ymd)) {
    return ymd[0];
  }

  return _.join(separator, ymd);
}

function spliteDate(date: string) {
  const separator = '-';

  return _.split(separator, date);
}

function spliteDateRange(range: IFormatDateRange) {
  return _.map(spliteDate, Object.values(range));
}

function formatDate(type?: formatType) {
  return ([year, month, day]: string[]) => {
    switch (type) {
      case 'ko':
        return `${year}년 ${month}월 ${day}일`;
      default:
        return `${year}.${month}.${day}`;
    }
  };
}

function formattedArrayMapper(type?: formatType) {
  const dateFormatted = formatDate(type);

  return (ymd: string[]) => _.map(dateFormatted, ymd);
}

export const koFormattedDate = formattedArrayProcessor('ko');

export function formattedArrayProcessor(
  type?: formatType,
): (range: IFormatDateRange) => string[] {
  const formattedMapper = formattedArrayMapper(type);

  return _.flow([spliteDateRange, formattedMapper]);
}

/**
 * 지정된 날짜 포맷 형식으로 날짜 형식을 수정한다.
 */
export function formatDateRange(
  range: IFormatDateRange,
  type?: formatType,
): string {
  const formattedMapper = formattedArrayProcessor(type);

  return _.flow([formattedMapper, joinDate])(range);
}

/**
 * 글자 길이 유효성 검사를 해준다.
 */
export function truncateText(maxLength: number) {
  return (currentText: string) => {
    if (currentText.length > maxLength) {
      return currentText.slice(0, maxLength);
    }

    return currentText;
  };
}

// formatTimeWithAMPM 헬퍼 함수
function getMeridiemKR(hour: number) {
  const AM = '오전';
  const PM = '오후';

  return hour >= 12 ? PM : AM;
}

export function formatTimeWithAMPM(time: string) {
  const [hour, minute] = time.split(':');
  const parsedHour = parseInt(hour, 10);
  const formattedHour = parsedHour % 12 || 12; // 오후 18:00 형태가 아닌 오후 6:00 형태로 만들기 위함
  const meridiem = getMeridiemKR(parsedHour);

  return `${meridiem} ${formattedHour}:${minute}`;
}

/**
 * 전달된 길이와 일치하는지 확인하는 함수를 반환
 */
export function createLengthValidator(length: number) {
  return (str: string) => _.size(str) === length;
}

/**
 * 입력값이 숫자와 알파벳 대소문자인지 파악
 */
export function validateCode(value: string) {
  const RegExp = /^[a-zA-Z0-9]+$/;

  return RegExp.test(value);
}

/**
 * 기기의 너비가 커지면 calculatedPxSize 값도 증가하고, 기기의 너비가 작아지면 calculatedPxSize 값도 감소한다.
 *
 * @param dimension 기준으로 계산될 크기를 전달한다. **(기본값은 기기의 너비 값)**
 * @param REFERENCE_WIDTH 피그마 작업 기준 너비
 * @returns 상대적인 사이즈 반환
 *
 * @example
 * ```ts
 * const relativeSizeConverter = convertToRelativeSize(Dimensions.get('window').width);
 *
 * relativeSizeConverter(avatarSize.width); // 기기의 너비에 따라 px 크기 계산
 * ```
 *
 */
export function convertToRelativeSize(
  dimension = Dimensions.get('window').width,
  REFERENCE_WIDTH = 375,
) {
  const cache = new Map<number, number>();

  return (size: number) => {
    const validatedSize = _.isNumber(size) ? size : 0;

    if (cache.has(validatedSize)) {
      return cache.get(validatedSize) as number;
    }

    const result = PixelRatio.roundToNearestPixel(
      validatedSize * (dimension / REFERENCE_WIDTH),
    );
    const calculatedData = Math.trunc(result);

    cache.set(validatedSize, calculatedData);

    return calculatedData;
  };
}

/**
 * 디바이스 사이즈에 따라서 상대적으로 크기를 가변시킨다.
 *
 * 기기의 너비가 커지면 size 값도 증가하고,
 *
 * 기기의 너비가 작아지면 size 값도 감소한다.
 */
export const relativeSizeConverter = convertToRelativeSize();

export const applyRelativeSizes: IapplyRelativeSizes = (sizes) => {
  if (_.isArray(sizes)) {
    return sizes.map(relativeSizeConverter);
  }

  return Object.values(sizes).map(relativeSizeConverter);
};

export function isExpiry(date: string) {
  const targetDate = new Date(date);
  const currentDate = new Date();

  return targetDate < currentDate;
}

export function getDatesInRange(startDate: string, endDate: string) {
  const dates = [];
  const currentDate = new Date(startDate);
  const lastDate = new Date(endDate);

  currentDate.setDate(currentDate.getDate() + 1); // 시작 날짜를 다음 날짜로 설정

  while (currentDate < lastDate) {
    dates.push(currentDate.toISOString().split('T')[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

function getFileName(uri: string) {
  const emptyFileName = 'noname.jpg';
  const fileName = uri.split('/').pop();

  return fileName ?? emptyFileName;
}

function inferTypeImage(fileName: string) {
  const match = /\.(\w+)$/.exec(fileName);
  const imageType = match ? `image/${match[1]}` : `image`;

  return imageType;
}

export function getAssetState(assets: ImagePickerAsset): AssetState {
  const imageURI = assets.uri;
  const fileName = getFileName(imageURI);
  const imageType = inferTypeImage(fileName);

  return {
    name: fileName,
    type: imageType,
    uri: imageURI,
  };
}

function createFormData(key: string) {
  return (value: string | Blob) => {
    const fromData = new FormData();

    fromData.append(key, value);

    return fromData;
  };
}

export function createImageFormData(imageFormData: string | Blob): FormData {
  const KEY = 'image';
  const formData = createFormData(KEY);

  return formData(imageFormData);
}

export function getImageUrl(item: { imageUrl: string }) {
  return item.imageUrl;
}

export function isMeetingFormValid({
  meetingImage,
  meetingName,
  meetingDateRange,
}: IisMeetingDataValid) {
  const hasImage = meetingImage !== null;
  const hasName = meetingName.length > 0;
  const hasDateRange =
    meetingDateRange !== null &&
    (meetingDateRange.startFrom || meetingDateRange.endTo);

  // 모든 속성 값이 존재하는지 여부를 반환
  return hasImage && hasName && hasDateRange;
}
