import React from "react";
import { TEACHERS_ROLES } from "../../helpers/Constants";

function Role({ status }) {
  const teacherRoles =
    Object.values(TEACHERS_ROLES).find((role) => role.value === status) || {};
  return <span className="text-pink text-bold">{teacherRoles.display}</span>;
}

export default Role;
