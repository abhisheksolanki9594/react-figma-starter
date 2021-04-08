import { IconButton, MenuIcon } from "../../Shared/MaterialComponents";

export default function FirstSection() {
    return (
        <div className='first-section'>
            <IconButton color='inherit'>
                <MenuIcon />
            </IconButton>

            <label className='task-list-label'>TASK LIST</label>
        </div>
    );
}
