import { React } from 'react';
import context from '../../core/context';

const EditButton = () =>
	<button
		className="btn"
		disabled={ context.state.editing === null }
		onClick={ context.actions.editingTodo }
	>
		ok
	</button>;

export default EditButton;
