import React from 'react';
import Card from './Card';
import AddNew from './AddNew';
import ListOptions from './ListOptions';

const listItems = [
    {id: 1, name: 'To Do'},
    {id: 2, name: 'In Progress'},
    {id: 3, name: 'In Testing'},
    {id: 4, name: 'Deployed'},
    {id: 5, name: 'Completed'}
]

const List = () => {
  return (
    <>
      <div className='flex overflow-x-auto'>
        {listItems.map((list) => (
            <div key={list.id} className='p-3 bg-gray-200 min-w-[300px] overflow-x-auto max-h-screen mr-3 rounded shadow list height-contain'>
                <div className='flex justify-between'>
                    <span>{list.name}</span>
                    <ListOptions />
                </div>
                <Card />
                <Card />
                <AddNew />
            </div>
        ))}

        <div className='p-3 bg-gray-200 min-w-[300px] mr-3 min-h-auto rounded shadow height-contain'>
          <AddNew />
        </div>
      </div>
    </>
  );
};

export default List;