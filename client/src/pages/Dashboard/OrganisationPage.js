import React, { useEffect, useState, useCallback } from "react";
import Layout from "./../../components/shared/Layout/Layout";
import moment from "moment";
import { useSelector } from "react-redux";
import API from "../../services/API";

const OrganisationPage = () => {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  const getOrg = useCallback(async () => {
    try {
      const endpoint =
        user?.role === "donor"
          ? "/inventory/get-orgnaisation"
          : "/inventory/get-orgnaisation-for-hospital";
      const { data } = await API.get(endpoint);
      if (data?.success) {
        setData(data?.organisations);
      }
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  useEffect(() => {
    getOrg();
  }, [getOrg]);

  return (
    <Layout>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr key={record._id}>
              <td>{record.organisationName}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.address}</td>
              <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default OrganisationPage;
