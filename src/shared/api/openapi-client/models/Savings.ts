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
import type { Opex } from './Opex';
import {
    OpexFromJSON,
    OpexFromJSONTyped,
    OpexToJSON,
    OpexToJSONTyped,
} from './Opex';
import type { OpexWeekly } from './OpexWeekly';
import {
    OpexWeeklyFromJSON,
    OpexWeeklyFromJSONTyped,
    OpexWeeklyToJSON,
    OpexWeeklyToJSONTyped,
} from './OpexWeekly';
import type { UpfrontCost } from './UpfrontCost';
import {
    UpfrontCostFromJSON,
    UpfrontCostFromJSONTyped,
    UpfrontCostToJSON,
    UpfrontCostToJSONTyped,
} from './UpfrontCost';
import type { Recommendation } from './Recommendation';
import {
    RecommendationFromJSON,
    RecommendationFromJSONTyped,
    RecommendationToJSON,
    RecommendationToJSONTyped,
} from './Recommendation';
import type { Emissions } from './Emissions';
import {
    EmissionsFromJSON,
    EmissionsFromJSONTyped,
    EmissionsToJSON,
    EmissionsToJSONTyped,
} from './Emissions';

/**
 * 
 * @export
 * @interface Savings
 */
export interface Savings {
    /**
     * 
     * @type {Emissions}
     * @memberof Savings
     */
    emissions?: Emissions;
    /**
     * 
     * @type {Opex}
     * @memberof Savings
     */
    opex?: Opex;
    /**
     * 
     * @type {UpfrontCost}
     * @memberof Savings
     */
    upfrontCost?: UpfrontCost;
    /**
     * 
     * @type {Recommendation}
     * @memberof Savings
     */
    recommendation?: Recommendation;
    /**
     * 
     * @type {OpexWeekly}
     * @memberof Savings
     */
    opexBefore?: OpexWeekly;
    /**
     * 
     * @type {OpexWeekly}
     * @memberof Savings
     */
    opexAfter?: OpexWeekly;
}

/**
 * Check if a given object implements the Savings interface.
 */
export function instanceOfSavings(value: object): value is Savings {
    return true;
}

export function SavingsFromJSON(json: any): Savings {
    return SavingsFromJSONTyped(json, false);
}

export function SavingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Savings {
    if (json == null) {
        return json;
    }
    return {
        
        'emissions': json['emissions'] == null ? undefined : EmissionsFromJSON(json['emissions']),
        'opex': json['opex'] == null ? undefined : OpexFromJSON(json['opex']),
        'upfrontCost': json['upfrontCost'] == null ? undefined : UpfrontCostFromJSON(json['upfrontCost']),
        'recommendation': json['recommendation'] == null ? undefined : RecommendationFromJSON(json['recommendation']),
        'opexBefore': json['opexBefore'] == null ? undefined : OpexWeeklyFromJSON(json['opexBefore']),
        'opexAfter': json['opexAfter'] == null ? undefined : OpexWeeklyFromJSON(json['opexAfter']),
    };
}

export function SavingsToJSON(json: any): Savings {
    return SavingsToJSONTyped(json, false);
}

export function SavingsToJSONTyped(value?: Savings | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'emissions': EmissionsToJSON(value['emissions']),
        'opex': OpexToJSON(value['opex']),
        'upfrontCost': UpfrontCostToJSON(value['upfrontCost']),
        'recommendation': RecommendationToJSON(value['recommendation']),
        'opexBefore': OpexWeeklyToJSON(value['opexBefore']),
        'opexAfter': OpexWeeklyToJSON(value['opexAfter']),
    };
}

