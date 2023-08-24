import { View } from 'react-native';
import React from 'react';
import { useMutation } from '@tanstack/react-query';
import * as Haptics from 'expo-haptics';

import { QueryKeys } from '@app/api/type';
import { requestDeleteMeeting } from '@post/api/v1';
import { GetMeetingSliceResponse } from '@post/api/v2/type';
import useSearchManagement from '@post/hooks/useSearchManagement';
import { setQueryData } from '@app/api/queryClient';
import PostDeletionModal from './modal/Modal';
import { Ideletion } from './type';

export default function Deletion({ id, showModal, onClose }: Ideletion) {
  const {
    searchState: { dateRange },
  } = useSearchManagement();
  // 검색 API 요청 파라미터
  const paramater = {
    dateFrom: dateRange.startingDay?.dateString,
    dateTo: dateRange.endingDay?.dateString,
  };
  const updateMeeting = removeMeetingById(id);
  const mutate = useMutation(requestDeleteMeeting, {
    onSuccess: () => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setQueryData<GetMeetingSliceResponse>(
        [QueryKeys.meetings, paramater],
        updateMeeting,
      );
    },
  });

  return (
    <View>
      <PostDeletionModal
        isVisible={showModal}
        onPressLeft={onClose}
        onPressRight={() => mutate.mutate(id)}
      />
    </View>
  );
}

function removeMeetingById(id: number) {
  return (oldData: GetMeetingSliceResponse | undefined) => {
    if (!oldData) return oldData;

    const updatedContents = oldData.contents.filter(
      ({ meetingId }) => meetingId !== id,
    );

    return {
      ...oldData,
      contentsCount: oldData.contentsCount - 1,
      contents: updatedContents,
    };
  };
}
