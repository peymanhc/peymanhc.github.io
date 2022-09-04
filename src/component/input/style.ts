const styles = (theme: any) => ({
    root: {
      '& .ant-input-number-handler-wrap': {
        display: 'none',
      },
      background: theme.palette.colors.white,
      '&:focus-within': {
        background: theme.palette.colors.white,
        border: `1px solid ${theme.palette.first[200]}`,
        boxShadow: 'none !important',
      },
      borderRadius: 4,
      width: '100%',
      height: 40,
      border: `1px solid ${theme.palette.colors.grey[100]}`,
      '&:focus': {
        background: theme.palette.white,
        border: `1px solid ${theme.palette.first[100]}`,
        boxShadow: 'none !important',
      },
      '&:hover': {
        background: theme.palette.white,
        border: `1px solid ${theme.palette.first[400]} !important`,
        boxShadow: 'none !important',
      },
      '& .ant-input-number-input-wrap': {
        width: '100%',
        height: '100%',
        '& .ant-input-number-input': {
          height: '100%',
        },
      },
      '&::-webkit-scrollbar': {
        width: 3,
      },
      '&::-webkit-scrollbar-track': {
        background: ' #f1f1f1',
      },
      '&::-webkit-scrollbar-thumb ': {
        background: theme.palette.primary,
      },
    },
  });
  
  export default styles;
  