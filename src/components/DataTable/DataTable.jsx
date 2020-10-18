import React from "react";
import MaterialTable from "material-table";

//Loading Component
import { JumpCircleLoading } from "react-loadingg";

const DataTable = (props) => {
  const userRepos = props.userRepos;
  const userRepoLoading = props.userRepoLoading;
  console.log("UserRepo from datatable", userRepos);

  if (userRepoLoading) {
    return <JumpCircleLoading />;
  } else {
    return (
      <>
        <div
          style={{ maxWidth: "100%", marginTop: "4rem", marginBottom: "4rem" }}
        >
          <MaterialTable
            columns={[
              { title: "Nombre", field: "name" },
              { title: "Descripción", field: "description" },
              { title: "Brach por defecto", field: "default_branch" },
              { title: "Lenguaje", field: "language" },
              { title: "Url del repositorio", field: "html_url" },
            ]}
            data={userRepos}
            options={{
              search: true,
            }}
            title="Repositorios"
          />
        </div>
      </>
    );
  }
};
export default DataTable;
