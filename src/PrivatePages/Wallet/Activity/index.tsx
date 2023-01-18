/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from "react";
import { Box, Table, Th, Td, TableHeaderRow, Status } from "../styles";
// import { ActivityData } from "../../../Shared/ActivityData";
import userOBJ from "../../../classes/user.class";
import moment from "moment";
import EmptyData from '../../../Components/EmptyData'
import Pagination from "../../../Components/Pagination";

export default function RecentActivity() {
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, settotalPages] = useState<number>(0);
  const [activityData, setActivityData] = useState<[]>([])
  // let activityData:any = []
  useEffect(() => {
    userOBJ.get_user_activity(currentPage).then((resp: any) => {
      setActivityData(resp.payload)
      settotalPages(resp?.totalPages);
    })
  }, [currentPage])
  return (
    <>
       <Box>
      <Table>
        <thead>
          <TableHeaderRow>
            {/* <Th>S/N</Th> */}
            <Th>Email</Th>
            <Th>Payment Type</Th>
            <Th>Amount</Th>
            <Th>Date & Time</Th>
            <Th>Status</Th>
          </TableHeaderRow>
        </thead>
        <tbody>
          {!!activityData.length && activityData.map((_:any, i:number) => {
            return (
              <tr key={i}>
                {/* <Td>{i + 1}</Td> */}
                <Td>{_.email}</Td>
                <Td>{_.paymentType}</Td>
                <Td>NGN {_.amount}</Td>
                <Td>{moment(new Date(_.createdAt)).format('MMM Do YYYY,h:mm a')}</Td>
                <Td>
                  <Status
                    style={{
                      backgroundColor: `${
                        (_.status === "failed" && "#FFD1D1") ||
                        (_.status === "success" && "#F5FBF7") ||
                        (_.status === "pending" && "#FBF7D9")
                      }`,
                      color: `${
                        (_.status === "failed" && "#EF0000") ||
                        (_.status === "success" && "#009933") ||
                        (_.status === "pending" && "#F0BB00")
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
      {!activityData.length && <EmptyData data="Activity" />}
     
    </Box>
     {activityData?.length > 0 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            callBack={(value: any) => {
              setCurrentPage(value);
              // getStudentRequests(value);
            }}
          />
        )}
    </>
  );
}