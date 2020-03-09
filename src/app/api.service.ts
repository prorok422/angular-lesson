import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Data } from './mock-data';
import { Film } from "./interface/film";

@Injectable()
export class ApiService {
  getDepartments(): Film[] {
    return _.chain(Data)
        .groupBy("department")
        .map((value, key) => ({title: key, children: value}))
        .value();
  }
}
