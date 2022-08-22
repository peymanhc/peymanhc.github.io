import style from 'provider/style';

const styles = (theme: any) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: [5, 0],
  },
  titleYearMonth: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    '& h3': {
      fontSize: 20,
      marginBottom: 2,
      color: '#263238',
    },
    '& span': {
      color: theme.palette.primary,
      fontSize: 14,
      fontWeight: 500,
      textAlign: 'center',
    },
  },
  arrowMonth: {
    cursor: 'pointer',
    '& i': {
      fontSize: 21,
      fontWeight: 600,
      color: theme.palette.primary,
    },
  },
  calendar: {
    '& table': {
      '& tr': {
        display: 'flex',
        width: '100% ',
        '& th': {
          margin: [10, 0],
          width: '100% !important',
          fontSize: 12,
        },
        '& td': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          margin: 10,
          "&.ant-picker-cell-disabled":{
            "&:before":{
              backgroundColor:"transparent",
            },
            "& .ant-picker-cell-inner":{
              backgroundColor:theme.palette.colors.red[200],
              border:`1px solid ${theme.palette.colors.red[300]}`,
            }
          },
          '&.ant-picker-cell': {
            '& .ant-picker-calendar-date-value': {
              fontSize: 16,
              position:"relative",
              zIndex:2
            },
          },
          '&.ant-picker-cell-in-view': {
            '&.ant-picker-cell-selected': {
              borderRadius: 4,
              '& .ant-picker-cell-inner': {
                borderColor: theme.palette.primary,
                border: `1px solid ${theme.palette.primary}`,
                borderRadius: 4,
                backgroundColor:theme.palette.colors.green[50]
              },
            },
            '& .ant-picker-cell-inner': {
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
              color: theme.palette.primary,
              '&.ant-picker-calendar-date-today': {
                '&::before': {
                  background: "transparent",
                  border: `1px solid ${theme.palette.primary}`,
                  color: theme.palette.primary,
                  borderRadius: 4,
                },
              },
            },
          },
        },
      },
    },
  },
  calendarWrapper: {
    border: `1px solid ${theme.palette.colors.grey[100]}`,
    borderRadius: 8,
    padding: [20, 15],
  },
  '@media screen and (max-width:480px)': {
    root: {
      margin: [0, 16],
    },
    calendarWrapper: {
      padding: 0,
      overflow: 'hidden',
      '& thead': {
        '& tr': {
          '& th': {
            fontSize: 10,
          },
        },
      },
      '& tbody': {
        '& tr': {
          '& td': {
            margin: [5, 5],
          },
        },
      },
    },
  },
});

export default style(styles);
