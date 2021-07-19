import TaskList from "./taskList";
import { Box, Grid, Typography } from '@material-ui/core';

const TaskPane = () =>
	<Box height="100vh"overflow="auto">
		<Typography variant="h4">Task</Typography>
		{ TaskList() }
	</Box>;

export default TaskPane;
