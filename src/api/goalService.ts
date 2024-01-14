import React from "react";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

// PostでeditGoalAPIを実行する関数
export const editGoalAPI = async (goal: string) => {
  //   try {
  //     const url = "http://localhost:8080/goal";
  //     const options = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(goal),
  //     };
  //     const response = await fetch(url, options);
  //     if (!response.ok) {
  //       throw new Error("Failed to change goal");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // MockとしてHTTP status200を返す
  console.log(goal);
  return { status: 200 };
};

export const fetchGoalAPI = (): Promise<string> => {
  return Promise.resolve("TOEIC600点");
};
