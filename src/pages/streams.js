import React from "react";
import {
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  Divider,
  Title,
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';
import StreamIcon from '@patternfly/react-icons/dist/js/icons/stream-icon';
import { StreamTable } from '../components/streamTable';
import "../app.scss";

export const StreamsPage = () => {
  // use localstorage to fake a db for now
  let streams = localStorage.getItem('streams')
  streams = streams ? JSON.parse(streams) : [];
  console.log('streams', streams);
  return (
    <React.Fragment>
      <PageSection variant={PageSectionVariants.light} isWidthLimited>
        <Title headingLevel="h1" size="2xl">
          Openshift streams
        </Title>
      </PageSection>
      <Divider />
      <PageSection style={{ backgroundColor: 'var(--pf-global--BackgroundColor--light-300)' }}>
        {streams.length === 0
          ? (
            <EmptyState variant="xl">
              <EmptyStateIcon icon={StreamIcon} />
              <Title headingLevel="h4" size="lg">
                You haven't created any Streams instances yet.
              </Title>
              <EmptyStateBody>
                Create a streams instance to get started.
              </EmptyStateBody>
              <Button variant="primary">
                Create stream
              </Button>
            </EmptyState>
          )
          : (
            <StreamTable instances={streams} />
          )
        }
      </PageSection>
    </React.Fragment>
  );
};
