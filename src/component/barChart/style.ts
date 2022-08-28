import style from "provider/style";

const styles = (theme: any) => ({
    root:{
        "& .tooltip":{
            padding:15,
            minWidth:150,
            "& h4":{
                textAlign:"center",
                marginBottom:20,
            },
            "& h5":{
                fontSize:13,
                textAlign:"center"
            },
            "& span":{
                paddingLeft:16
            }
        }
    },
});

export default style(styles);
