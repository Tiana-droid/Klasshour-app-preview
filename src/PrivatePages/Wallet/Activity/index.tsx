/* eslint-disable no-mixed-operators */
import React from "react";
import { Box, Table, Th, Td, TableHeaderRow, Status } from "../styles";
import { ActivityData } from "../../../Shared/ActivityData";

export default function RecentActivity() {
  return (
    <Box>
      <Table>
        <thead>
          <TableHeaderRow>
            <Th>S/N</Th>
            <Th>Email</Th>
            <Th>Payment Type</Th>
            <Th>Amount</Th>
            <Th>Date & Time</Th>
            <Th>Status</Th>
          </TableHeaderRow>
        </thead>
        <tbody>
          {ActivityData.map((_, i) => {
            return (
              <tr key={i}>
                <Td>{i + 1}</Td>
                <Td>{_.email}</Td>
                <Td>{_.paymentType}</Td>
                <Td>{_.amount}</Td>
                <Td>{_.dateAndTime}</Td>
                <Td>
                  <Status
                    style={{
                      backgroundColor: `${
                        (_.status === "Failed" && "#FFD1D1") ||
                        (_.status === "Sucess" && "#F5FBF7") ||
                        (_.status === "Pending" && "#FBF7D9")
                      }`,
                      color: `${
                        (_.status === "Failed" && "#EF0000") ||
                        (_.status === "Sucess" && "#009933") ||
                        (_.status === "Pending" && "#F0BB00")
                      }`,
                    }}
                  >
                    {_.status}
                  </Status>
                </Td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Box>
  );
}