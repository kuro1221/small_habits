import { useState, useEffect, useCallback } from "react";
import { fetchGoal } from "../api/goalService";

const useGoal = () => {
  const [goal, setGoal] = useState<string>("");

  useEffect(() => {
    fetchGoal().then((fetchedGoal: string) => {
      setGoal(fetchedGoal);
      console.log(goal);
    });
  }, []);

  return { goal };
};

export default useGoal;
