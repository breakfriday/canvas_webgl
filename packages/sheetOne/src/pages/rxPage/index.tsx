import React, { useState, useEffect } from 'react';

import { Subject, interval, fromEvent, of, from, defer } from 'rxjs';
import { map, scan, startWith, switchMap, takeUntil, takeWhile, mergeMap, delay } from 'rxjs/operators';

const taskSubject = new Subject();
const concurrentLimit = 2;

const source = taskSubject.pipe(
  mergeMap((task) => defer(() => from(task())), concurrentLimit),
);

source.subscribe((val) => console.log(val));

const addTask = (task) => {
  taskSubject.next(task);
};

const Elevator = () => {
  return (
    <div onClick={() => {
      addTask(() => {
        console.log('task1');
        return new Promise((res) => {
          setTimeout(() => {
            res({ data: 'request 1' });
          }, 3000);
        });
      });
      addTask(() => {
        console.log('task2');
        return new Promise((res) => {
          setTimeout(() => {
            res({ data: 'request 2' });
          }, 3000);
        });
      });
      addTask(() => new Promise((resolve) => setTimeout(() => resolve({ data: 'request 3' }), 100)));
      addTask(() => new Promise((resolve) => setTimeout(() => resolve({ data: 'request 4' }), 1000)));
    }}
    >dd


    </div>

  );
};

export default Elevator;

