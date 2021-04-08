import { Badge, IconButton, ForumIcon, SettingsIcon, NotificationsIcon, AccountCircleIcon } from "../../Shared/MaterialComponents";

export default function ThirdSection() {
    return (
        <div className='third-section'>
            <IconButton color='inherit'>
                <ForumIcon />
            </IconButton>

            <IconButton color='inherit'>
                <Badge badgeContent={3} color='secondary'>
                    <NotificationsIcon />
                </Badge>
            </IconButton>

            <IconButton color='inherit'>
                <SettingsIcon />
            </IconButton>

            <IconButton color='inherit'>
                <AccountCircleIcon />
            </IconButton>
        </div>
    );
}
