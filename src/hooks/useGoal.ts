import { useState, useEffect, useCallback } from "react";
import { fetchGoalAPI } from "../api/goalService";
import { changeGoalAPI } from "../api/goalService";

const useGoal = () => {
  const [goal, setGoal] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchGoalAPI().then((fetchedGoal: string) => {
      setGoal(fetchedGoal);
      console.log(goal);
    });
  }, []);

  const changeGoal = async (newGoal: string) => {
    try {
      if (newGoal === "") setError("目標を入力してください");
      await changeGoalAPI(newGoal);
      setGoal(newGoal);
      setError("");
    } catch (error) {
      console.log(error);
    }
  };

  return { goal, error, changeGoal };
};

export default useGoal;
