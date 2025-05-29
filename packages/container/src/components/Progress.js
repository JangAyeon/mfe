// 1. React와 필요한 Material-UI 컴포넌트 불러오기
import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

// 2. 스타일 정의
const useStyles = makeStyles((theme) =>
  createStyles({
    bar: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2), // 위에 여백 추가
      },
    },
  })
);

// 3. Progress 컴포넌트 정의 및 내보내기
export default function Progress() {
  const classes = useStyles();
  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  );
}
