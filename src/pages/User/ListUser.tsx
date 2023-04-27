import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../../services";
import { AppState } from "../../store";
import {
  getListUserPagingFail,
  getListUserPagingRequest,
  getListUserPagingSuccess,
} from "../../store/user/actions";
import { Pagination } from "../../helpers";
import { User } from "../../store/user/types";

export const ListUser = () => {
  const dispatch = useDispatch();

  const listUser = useSelector((state: AppState) => state.user.listUser);
  const loading = useSelector((state: AppState) => state.user.loading);

  const onFetchListUserPaging = useCallback(async () => {
    dispatch(getListUserPagingRequest());

    const res = await userService.getListUserPaging("", 1, 10);

    if (res.error) {
      dispatch(getListUserPagingFail(res.error));
    } else {
      dispatch(getListUserPagingSuccess(res.data));
    }
  }, [dispatch]);

  useEffect(() => {
    onFetchListUserPaging();
  }, [onFetchListUserPaging]);

  useEffect(() => {
    if (listUser && !loading) {
      console.log("list.items :>> ", listUser.items);
    }
  }, [listUser, loading]);

  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">Tables</h1>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the{" "}
        <a target="_blank" href="https://datatables.net" rel="noreferrer">
          official DataTables documentation
        </a>
        .
      </p>
      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing={0}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>$320,800</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
