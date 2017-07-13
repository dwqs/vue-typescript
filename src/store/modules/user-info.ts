'use strict';

import { Module } from 'vuex';

export type userIdentifier = 'add' | 'sub';

class State {
    public static count: number = 0;
}

export default {
    state: State,
}