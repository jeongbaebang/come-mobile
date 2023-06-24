import React from 'react';

import { ScreenTitle } from '@shared/components/font/Font';
import ImageUploader from '@shared/components/imageUploader/ImageUploader';
import ScreenLayout from '@shared/components/layout/ScreenLayout';
import DividerWrapper from '@post/components/detail/DividerWrapper';

const TITLE = '사진 등록';
const DESCRIPTION = '사진을 등록해 주세요';

export default function Uploader() {
  return (
    <DividerWrapper>
      <ScreenLayout>
        <ScreenTitle>{TITLE}</ScreenTitle>
        <ImageUploader description={DESCRIPTION} onPress={() => null} />
      </ScreenLayout>
    </DividerWrapper>
  );
}
