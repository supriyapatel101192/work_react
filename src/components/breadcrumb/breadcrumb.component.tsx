import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styles from './breadcrumb.module.scss';

import { BreadcrumbsProps } from './breadcrumb.type';

export const BreadcrumbsComponent = ({ routesList, className }: BreadcrumbsProps) => (
  <div className={className}>
    <div className={styles.breadcrumbContainerEH}>
      <div>
        <FontAwesomeIcon icon={faHome} />
      </div>
      {routesList.map((data) => (
        <Link to={data.route} state={{ from: `${data.from}` }} className={styles.linkEH} key={data.name}>
          <div className={styles.linkTextEH}>{data.name}</div>
        </Link>
      ))}
    </div>
  </div>
);
