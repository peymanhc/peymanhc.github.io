const styles = (theme: any) => ({
    root: {
      '& .ant-modal-content': {
        background: 'transparent',
      },
      '& .ant-modal-header': {
        borderRadius: '8px 8px 0 0',
        borderBottom: 'none',
        '& .ant-modal-title': {
          textAlign: 'center',
          color: '#263238 !important',
          '& .ant-divider-with-text': {
            borderTopColor: theme.palette.colors.grey[100],
            padding: '0 2em',
          },
          '& .ant-divider-inner-text': {
            padding: '0 3em',
            fontSize: 14,
            fontWeight: 'bold',
          },
        },
      },
      '& .ant-modal-body': {
        borderRadius: '0 0 8px 8px',
        backgroundColor:theme.palette.white,
        padding:[0,24,24,24]
      },
      '& .ant-modal-close': {
        left: 'initial',
        right: '5px',
        top: '5px',
        width: '30px',
        height: '30px',
        '& .ant-modal-close-x': {
          width: '30px',
          height: '30px',
          lineHeight: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
    '@media (max-width: 992px)': {
      root: {
        '& .ant-divider-horizontal.ant-divider-with-text': {
          margin: '5px 0 !important',
        },
        '& .ant-modal-body': {
          padding: 10,
        },
        '& .ant-modal-header': {
          padding: 10,
        },
        '& .ant-modal-title': {
          '& .ant-divider-with-text': {
            padding: '0 1em !important',
          },
          '& .ant-divider-inner-text': {
            padding: '0 1.5em',
          },
        },
      },
    },
  });
  
  export default styles;
  