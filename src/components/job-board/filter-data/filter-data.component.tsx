import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {
  UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody, Label, Input,
} from 'reactstrap';
import classNames from 'classnames';
import { filterData } from './filter.mock';
import './filter-data.scss';
import { FilterProps } from './filter.type';

export const FilterDataComponent: React.FC<FilterProps> = ({
  isOpen, toggle, filterJobData, filterHandleData,
}) => {
  const [accordianOpen, setAccordianOpen] = useState<string>('');
  const accordianToggle = (id:string) => {
    if (accordianOpen === id) {
      setAccordianOpen('');
    } else {
      setAccordianOpen(id);
    }
  };

  return (
    <div className={classNames('sidebar', { 'is-open': isOpen })}>
      <div className="card-filter">
        <div className="filter-cross-left">
          <FontAwesomeIcon icon={faFilter} />
          <span className="filter-heading">Apply Filters</span>
        </div>
        <div className="filter-cross-right">
          <FontAwesomeIcon className="filter-cross" onClick={toggle} icon={faTimes} />
        </div>
      </div>
      <div className="accordian-style">
        {filterData.map((header, index) => (
          <UncontrolledAccordion key={header.heading} open={index.toString()} defaultOpen="0">
            <AccordionItem onClick={() => accordianToggle(index.toString())} className="accordian-item">
              <AccordionHeader targetId={index.toString()}>
                <span className="filter-sub-heading">
                  {header.heading}
                </span>
              </AccordionHeader>
              <AccordionBody accordionId={index.toString()}>
                {header.subData.map((data, subIndex) => (
                  header.heading === 'Job Preference'
                    ? (
                      <Label key={data + subIndex.toString()} check style={{ display: 'block' }}>
                        <Input type="checkbox" checked={filterJobData.jobPref.indexOf(data.key) > -1} value={data.key} onChange={(e) => filterHandleData(e)} className="filter-check-input" />
                        <span className="checkbox-label">{data.value}</span>
                      </Label>
                    )
                    : header.heading === 'Job Type' ? (
                      <Label key={data + subIndex.toString()} check style={{ display: 'block' }}>
                        <Input type="checkbox" checked={filterJobData.jobType.indexOf(data.key) > -1} value={data.key} onChange={(e) => filterHandleData(e)} className="filter-check-input" />
                        <span className="checkbox-label">{data.value}</span>
                      </Label>
                    ) : header.heading === 'Hire Type' ? (
                      <Label key={data + subIndex.toString()} check style={{ display: 'block' }}>
                        <Input type="checkbox" checked={filterJobData.jobHireTp.indexOf(data.key) > -1} value={data.key} onChange={(e) => filterHandleData(e)} className="filter-check-input" />
                        <span className="checkbox-label">{data.value}</span>
                      </Label>
                    ) : null
                ))}
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
        ))}
      </div>
    </div>
  );
};
export default FilterDataComponent;
