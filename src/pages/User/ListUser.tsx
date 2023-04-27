import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../../components";
import { userService } from "../../services";
import { AppState } from "../../store";
import {
  getListUserPagingFail,
  getListUserPagingRequest,
  getListUserPagingSuccess,
} from "../../store/user/actions";
import { User } from "../../store/user/types";
import { UserItemRow } from "./UserItemRow";

export const ListUser = () => {
  const dispatch = useDispatch();

  const listUser = useSelector((state: AppState) => state.user.listUser);
  const totalItem = useSelector((state: AppState) => state.user.total);
  const pageSize = useSelector((state: AppState) => state.user.pageSize);
  const keyword = useSelector((state: AppState) => state.user.keyword);

  const [currentPage, setCurrentPage] = useState(1);

  const onFetchListUserPaging = useCallback(async () => {
    dispatch(getListUserPagingRequest());

    const res = await userService.getListUserPaging(
      keyword || "",
      currentPage,
      pageSize
    );

    if (res.error) {
      dispatch(getListUserPagingFail(res.error));
    } else {
      dispatch(getListUserPagingSuccess(res.data));
    }
  }, [currentPage, dispatch, pageSize, keyword]);

  useEffect(() => {
    onFetchListUserPaging();
  }, [onFetchListUserPaging]);

  const onPageChanged = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
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
                  <th>Avatar</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              {listUser && listUser.items.length > 0 && (
                <tbody>
                  {listUser!.items.map((userItem: User) => (
                    <UserItemRow key={userItem._id} userItem={userItem} />
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
        <div className="card-footer">
          <Pagination
            totalRecords={totalItem}
            pageLimit={5}
            pageSize={pageSize}
            onPageChanged={onPageChanged}
          />
        </div>
      </div>
    </>
  );
};
