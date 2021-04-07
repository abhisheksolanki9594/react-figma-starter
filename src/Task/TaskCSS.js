import styled from "styled-components";

const TabContent = styled.section`
    padding: 0px 25ch 0px 25ch;
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

const TaskDetails = styled.div.attrs(() => ({ tabIndex: 0 }))`
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

const AllTabDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px 0px 50px 0px;

    .add-task-section {
        display: flex;
        justify-content: space-between;
        margin: 0px 0px 50px 0px;
    }

    .add-task-section .add-task-input .MuiOutlinedInput-root {
        width: 135ch;
        margin-right: 20px;
    }

    .add-task-section .add-task-button {
        background-color: #1976d2;
        color: #ffffff;
        flex-grow: 1;
    }

    .all-task-details {
        display: flex;
        flex-direction: column;
    }

    .all-task-details .accordion-header {
        border: 1px solid rgba(0, 0, 0, 0.125);
        box-shadow: none;
        &:not(:last-child): {
            border-bottom: 0;
        }
        &:before: {
            display: none;
        }
        &$expanded: {
            margin: auto;
        }
    }

    .all-task-details .accordion-summary {
        background-color: rgba(0, 0, 0, 0.03);
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
        margin-bottom: -1;
        min-height: 56;
        &$expanded: {
            minheight: 56;
        }
    }

    .all-task-details .accordion-details {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 16px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
        color: #000000 !important;
    }

    .all-task-details .accordion-details .accordion-detail-checkbox {
        width: 135ch;
        border-right: 1px solid rgba(0, 0, 0, 0.125);
    }

    .strike-through-text {
        text-decoration: line-through;
    }
`;

export { TabContent, CardDetails, AllTabDetails, TaskDetails };
