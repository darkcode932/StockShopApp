import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './administrator.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const AdministratorDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const administratorEntity = useAppSelector(state => state.administrator.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="administratorDetailsHeading">
          <Translate contentKey="stockShopApp.administrator.detail.title">Administrator</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{administratorEntity.id}</dd>
          <dt>
            <span id="idA">
              <Translate contentKey="stockShopApp.administrator.idA">Id A</Translate>
            </span>
          </dt>
          <dd>{administratorEntity.idA}</dd>
          <dt>
            <span id="firstNameA">
              <Translate contentKey="stockShopApp.administrator.firstNameA">First Name A</Translate>
            </span>
          </dt>
          <dd>{administratorEntity.firstNameA}</dd>
          <dt>
            <span id="lastNameA">
              <Translate contentKey="stockShopApp.administrator.lastNameA">Last Name A</Translate>
            </span>
          </dt>
          <dd>{administratorEntity.lastNameA}</dd>
          <dt>
            <span id="birthdayA">
              <Translate contentKey="stockShopApp.administrator.birthdayA">Birthday A</Translate>
            </span>
          </dt>
          <dd>
            {administratorEntity.birthdayA ? (
              <TextFormat value={administratorEntity.birthdayA} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/administrator" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/administrator/${administratorEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default AdministratorDetail;
