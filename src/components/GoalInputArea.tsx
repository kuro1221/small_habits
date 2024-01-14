import React from "react";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

type Props = {
  onChangeGoal: (goal: string) => void;
  goal: string;
};

export const GoalInputArea: React.FC<Props> = ({ onChangeGoal, goal }) => {
  const [changedGoal, setChangedGoal] = React.useState(goal);

  // モーダル
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    border: "20px  #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="justify-center">
      <div className="flex justify-between">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {`目標：${changedGoal}`}
        </Typography>
        <IconButton aria-label="delete" size="small" onClick={handleOpen}>
          <EditIcon />
        </IconButton>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="flex justify-center">
            <TextField
              id="standard-textarea"
              label="あなたの目標"
              placeholder="目標を入力してください"
              multiline
              variant="standard"
              className="w-full"
              value={changedGoal}
              onChange={(e) => {
                setChangedGoal(e.target.value);
              }}
            />
            <Button onClick={() => onChangeGoal(changedGoal)}>変更</Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
