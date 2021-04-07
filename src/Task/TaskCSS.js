import styled from "styled-components";

const TabContent = styled.section`
    padding: 20px;
`;

const CardDetails = styled.section`
    .tabs-list {
        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%);
    }

    .task-overview {
        display: flex;
        flex-direction: column;
        justify-content: start;
    }

    .task-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        padding: 20px;
    }
`;

const TaskDetails = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 10px;

    .avatar {
        background-color: #1976d2;
        margin-right: 20px;
    }

    .task-description {
        margin: 5px 0px 10px 20px;
    }
`;

const AllTabDetails = styled.section``;

export { TabContent, CardDetails, AllTabDetails, TaskDetails };
