/* tslint:disable */
/* eslint-disable */
/**
 * Household savings
 * This is the API for a household savings model. You can provide details about a household\'s energy use, and receive information about the household\'s potential emissions & cost savings from electrifying their fossil fuel machines, as well as the upfront costs of switching.
 *
 * The version of the OpenAPI document: 0.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { EmissionsValues } from './EmissionsValues';
import {
    EmissionsValuesFromJSON,
    EmissionsValuesFromJSONTyped,
    EmissionsValuesToJSON,
    EmissionsValuesToJSONTyped,
} from './EmissionsValues';

/**
 * 
 * @export
 * @interface Emissions
 */
export interface Emissions {
    /**
     * 
     * @type {EmissionsValues}
     * @memberof Emissions
     */
    perWeek?: EmissionsValues;
    /**
     * 
     * @type {EmissionsValues}
     * @memberof Emissions
     */
    perYear?: EmissionsValues;
    /**
     * 
     * @type {EmissionsValues}
     * @memberof Emissions
     */
    overLifetime?: EmissionsValues;
    /**
     * The assumed operational lifetime of the machines in years
     * @type {number}
     * @memberof Emissions
     */
    operationalLifetime?: number;
}

/**
 * Check if a given object implements the Emissions interface.
 */
export function instanceOfEmissions(value: object): value is Emissions {
    return true;
}

export function EmissionsFromJSON(json: any): Emissions {
    return EmissionsFromJSONTyped(json, false);
}

export function EmissionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Emissions {
    if (json == null) {
        return json;
    }
    return {
        
        'perWeek': json['perWeek'] == null ? undefined : EmissionsValuesFromJSON(json['perWeek']),
        'perYear': json['perYear'] == null ? undefined : EmissionsValuesFromJSON(json['perYear']),
        'overLifetime': json['overLifetime'] == null ? undefined : EmissionsValuesFromJSON(json['overLifetime']),
        'operationalLifetime': json['operationalLifetime'] == null ? undefined : json['operationalLifetime'],
    };
}

export function EmissionsToJSON(json: any): Emissions {
    return EmissionsToJSONTyped(json, false);
}

export function EmissionsToJSONTyped(value?: Emissions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'perWeek': EmissionsValuesToJSON(value['perWeek']),
        'perYear': EmissionsValuesToJSON(value['perYear']),
        'overLifetime': EmissionsValuesToJSON(value['overLifetime']),
        'operationalLifetime': value['operationalLifetime'],
    };
}

