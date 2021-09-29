import React from 'react'
import { useTheme } from '@apisuite/fe-base'
import Editor, { theme } from 'rich-markdown-editor'

import { MarkdownDisplayerProps } from './types'

const MarkdownDisplayer: React.FC<MarkdownDisplayerProps> = ({ content }) => {
  const { palette, typography } = useTheme()

  /* For us to 'brand' our markdown, we need to completely override
  the markdown displayer component's (i.e., 'Editor') in-built (light) theme.
  
  Please refer to 'https://github.com/outline/rich-markdown-editor' for more details. */
  const customTheme = {
    ...theme,
    divider: palette.grey[200],
    fontFamily: typography.fontFamily,
    fontFamilyMono: typography.fontFamily,
    link: palette.info.main,
    noticeInfoBackground: palette.info.light,
    noticeInfoText: palette.info.dark,
    noticeTipBackground: palette.primary.main,
    noticeTipText: palette.primary.contrastText,
    noticeWarningBackground: palette.warning.light,
    noticeWarningText: palette.warning.dark,
    text: palette.text.primary,
  }

  return (
    <Editor
      defaultValue={content}
      readOnly
      // theme={customTheme}
    />
  )
}

export default MarkdownDisplayer
