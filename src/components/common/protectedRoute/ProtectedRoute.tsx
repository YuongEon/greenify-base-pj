// Libs
import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { ExactPath } from '~/utils/constants/route';
// Shares
import { StorageEnum } from '~/utils/enum';

type Props = {
  role: string;
  ComponentProtected: React.ElementType;
};

const ProtectedRoute: FC<Props> = (props: Props) => {
  const { ComponentProtected, role } = props;
  const localRole = localStorage.getItem(StorageEnum.ACCESS_TOKEN)!;

  return localRole === role ? <ComponentProtected /> : <Navigate to={ExactPath.auth.login} />;
};

export default ProtectedRoute;
