import React, { useState, useEffect } from "react";
import AppBar from "./layouts/AppBar";
import TextField from "@mui/material/TextField";
import { GoalInputArea } from "./components/GoalInputArea";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="">
      <AppBar />
      <div className="flex justify-center">
        <div className="justify-center mt-8 w-3/5">
          <GoalInputArea />
          <div className="flex justify-between mt-8">
            <TextField
              id="standard-required"
              label="小さな習慣"
              placeholder="目標を達成するための小さな習慣を入力してください"
              variant="standard"
              className="w-4/5"
            />
            <Button variant="contained">完了</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
