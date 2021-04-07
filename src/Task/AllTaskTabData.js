import { Box, Typography } from "../Shared/MaterialComponents";
import { TabContent, AllTabDetails } from "./TaskCSS";

export default function AllTabData(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role='alltabdata' hidden={value !== index} id={`simple-alltabdata-${index}`} aria-labelledby={`simple-alltabdata-${index}`} {...other}>
            {value === index && (
                <TabContent>
                    <div>All</div>
                    {/* <Box>
                        <Typography>{children}</Typography>
                    </Box> */}
                </TabContent>
            )}
        </div>
    );
}
