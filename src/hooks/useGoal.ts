import { useState, useEffect, useCallback } from "react";
import { fetchGoalAPI } from "../api/goalService";
import { editGoalAPI } from "../api/goalService";

const useGoal = () => {
  const [goal, setGoal] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [changedGoal, setChangedGoal] = useState(goal);

  useEffect(() => {
    fetchGoalAPI().then((fetchedGoal: string) => {
      setGoal(fetchedGoal);
      console.log(goal);
    });
  }, []);

  async function editGoal(newGoal: string) {
    try {
      if (newGoal === "") return setError("目標を入力してください");
      if (newGoal.length > 40)
        return setError("目標は40文字以内で入力してください");
      await editGoalAPI(newGoal);
      setGoal(newGoal);
      setError("");
    } catch (error) {
      console.log(error);
    }
  }

  const onChangeGoal = (e: HTMLInputElement) => {
    setChangedGoal(e.value);
  };

  return { goal, error, editGoal };
};

export default useGoal;
