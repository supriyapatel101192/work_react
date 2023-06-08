import React from 'react';
import {
  Card, CardBody, CardText, CardTitle, Col, Container, Row,
} from 'reactstrap';
import './ww-job-progress.scss';

export const WWJobProgress: React.FC = () => {
  const [jobs, setJobs] = React.useState({
    tasks: [
      { name: 'Oracle', category: 'wip', bgcolor: 'skyblue' },
      { name: 'Barclays', category: 'applied', bgcolor: 'yellow' },
      { name: 'HCL', category: 'onhold', bgcolor: 'red' },
      { name: 'HSBC', category: 'complete', bgcolor: 'green' },
      { name: 'Capgemini', category: 'wip', bgcolor: 'skyblue' },
      { name: 'NICE', category: 'applied', bgcolor: 'yellow' },
      { name: 'Citi', category: 'onhold', bgcolor: 'red' },
      { name: 'NT', category: 'complete', bgcolor: 'green' },
      { name: 'CS', category: 'complete', bgcolor: 'green' },
    ],
  });
  const tasks : any = {
    applied: [],
    onhold: [],
    wip: [],
    complete: [],
  };

  const onDragOver = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  };

  const onDrop = (ev: React.DragEvent<HTMLDivElement>, cat: string) => {
    const id = ev.dataTransfer.getData('id');

    const taskA = jobs.tasks.filter((task: { name: any; category: any; }) => {
      if (task.name === id) {
        task.category = cat;
      }
      return task;
    });

    setJobs({ tasks: taskA });
  };
  jobs.tasks?.forEach((t) => {
    if (t.category === 'complete') {
      tasks.complete.push(
        <div
          key={t.name}
        >
          <Card className="draggable">
            <CardBody>
              <CardTitle tag="h5">
                { t.name }
              </CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <CardText>
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </CardText>
            </CardBody>
          </Card>
        </div>,
      );
    } else if (t.category === 'wip') {
      tasks.wip.push(
        <div
          key={t.name}
        >
          <Card className="draggable">
            <CardBody>
              <CardTitle>
                { t.name }
              </CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <CardText>
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </CardText>
            </CardBody>
          </Card>

        </div>,
      );
    } else if (t.category === 'onhold') {
      tasks.onhold.push(
        <div
          key={t.name}
        >
          <Card className="draggable">
            <CardBody>
              <CardTitle tag="h5">
                { t.name }
              </CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <CardText>
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </CardText>
            </CardBody>
          </Card>

        </div>,
      );
    } else if (t.category === 'applied') {
      tasks.applied.push(
        <div
          key={t.name}
        >
          <Card className="draggable">
            <CardBody>
              <CardTitle tag="h5">
                { t.name }
              </CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <CardText>
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </CardText>
            </CardBody>
          </Card>

        </div>,
      );
    }
  });
  return (
    <Container fluid className="ww-job-progress-container">
      <Row className="db-top-row">
        <Col className="droppable">
          <div
            className="header"
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => { onDrop(e, 'applied'); }}
          >
            <span className="col-title">Applied</span>
            {tasks.applied}
          </div>
        </Col>
        <Col className="droppable">
          <div
            className="header"
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => { onDrop(e, 'onhold'); }}
          >
            <span className="col-title">On Hold</span>
            {tasks.onhold}
          </div>
        </Col>
        <Col className="droppable">
          <div
            className="header"
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => { onDrop(e, 'wip'); }}
          >
            <span className="col-title">In Progress</span>
            {tasks.wip}
          </div>

        </Col>
        <Col className="droppable">
          <div
            className="header"
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, 'complete')}
          >
            <span className="col-title">Shortlisted</span>
            {tasks.complete}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
