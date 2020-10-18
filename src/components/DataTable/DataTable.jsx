import React from "react";
import MaterialTable from "material-table";

const DataTable = (props) => {
  const userRepos = props.userRepos;
  const userRepoLoading = props.userRepoLoading;
  console.log("UserRepo from datatable", userRepos);

  if (userRepoLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <div style={{ maxWidth: "100%" }}>
          <MaterialTable
            columns={[
              { title: "Name", field: "name" },
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
