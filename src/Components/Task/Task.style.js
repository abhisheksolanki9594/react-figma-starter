import styled from "styled-components";

export const CardDetails = styled.section`
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

export const TabContent = styled.section`
    padding: 0px 25ch 0px 25ch;
`;

export const TaskDetails = styled.div.attrs(() => ({ tabIndex: 0 }))`
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

export const AllTabDetails = styled.section`
    display: flex;
    flex-direction: column;
    margin: 50px 0px 50px 0px;

    .add-task-section {
        display: flex;
        justify-content: space-between;
        margin: 0px 0px 50px 0px;
    }

    .add-task-section {
        .add-task-datepicker {
            width: 23ch;
            margin-right: 20px;
            margin-top: 0;
            margin-bottom: 0;
        }

        .add-task-input .MuiOutlinedInput-root {
            width: 105ch;
            margin-right: 20px;
        }

        .add-task-button {
            background-color: #1976d2;
            color: #ffffff;
            flex-grow: 1;
        }
    }

    .all-task-details {
        display: flex;
        flex-direction: column;

        .accordion-header {
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

        .accordion-summary {
            background-color: rgba(0, 0, 0, 0.03);
            border-bottom: 1px solid rgba(0, 0, 0, 0.125);
            margin-bottom: -1;
            min-height: 56;
            &$expanded: {
                minheight: 56;
            }
        }

        .accordion-details {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 16px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.125);
            color: #000000 !important;

            .accordion-detail-checkbox {
                width: 135ch;
                border-right: 1px solid rgba(0, 0, 0, 0.125);
            }
        }
    }

    .strike-through-text {
        text-decoration: line-through;
    }
`;

export const EditModalDetails = styled.div`
    display: flex;
    flex-direction: column;
`;
