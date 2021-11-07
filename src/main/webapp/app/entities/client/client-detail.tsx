import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './client.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const ClientDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const clientEntity = useAppSelector(state => state.client.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="clientDetailsHeading">
          <Translate contentKey="stockShopApp.client.detail.title">Client</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{clientEntity.id}</dd>
          <dt>
            <span id="idC">
              <Translate contentKey="stockShopApp.client.idC">Id C</Translate>
            </span>
          </dt>
          <dd>{clientEntity.idC}</dd>
          <dt>
            <span id="firstNameC">
              <Translate contentKey="stockShopApp.client.firstNameC">First Name C</Translate>
            </span>
          </dt>
          <dd>{clientEntity.firstNameC}</dd>
          <dt>
            <span id="lastNameC">
              <Translate contentKey="stockShopApp.client.lastNameC">Last Name C</Translate>
            </span>
          </dt>
          <dd>{clientEntity.lastNameC}</dd>
          <dt>
            <span id="email">
              <Translate contentKey="stockShopApp.client.email">Email</Translate>
            </span>
          </dt>
          <dd>{clientEntity.email}</dd>
          <dt>
            <span id="phoneNumberC">
              <Translate contentKey="stockShopApp.client.phoneNumberC">Phone Number C</Translate>
            </span>
          </dt>
          <dd>{clientEntity.phoneNumberC}</dd>
        </dl>
        <Button tag={Link} to="/client" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/client/${clientEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ClientDetail;
