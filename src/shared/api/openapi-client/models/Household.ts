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
import type { Vehicle } from './Vehicle';
import {
    VehicleFromJSON,
    VehicleFromJSONTyped,
    VehicleToJSON,
    VehicleToJSONTyped,
} from './Vehicle';
import type { Solar } from './Solar';
import {
    SolarFromJSON,
    SolarFromJSONTyped,
    SolarToJSON,
    SolarToJSONTyped,
} from './Solar';
import type { Battery } from './Battery';
import {
    BatteryFromJSON,
    BatteryFromJSONTyped,
    BatteryToJSON,
    BatteryToJSONTyped,
} from './Battery';
import type { WaterHeatingEnum } from './WaterHeatingEnum';
import {
    WaterHeatingEnumFromJSON,
    WaterHeatingEnumFromJSONTyped,
    WaterHeatingEnumToJSON,
    WaterHeatingEnumToJSONTyped,
} from './WaterHeatingEnum';
import type { CooktopEnum } from './CooktopEnum';
import {
    CooktopEnumFromJSON,
    CooktopEnumFromJSONTyped,
    CooktopEnumToJSON,
    CooktopEnumToJSONTyped,
} from './CooktopEnum';
import type { SpaceHeatingEnum } from './SpaceHeatingEnum';
import {
    SpaceHeatingEnumFromJSON,
    SpaceHeatingEnumFromJSONTyped,
    SpaceHeatingEnumToJSON,
    SpaceHeatingEnumToJSONTyped,
} from './SpaceHeatingEnum';
import type { LocationEnum } from './LocationEnum';
import {
    LocationEnumFromJSON,
    LocationEnumFromJSONTyped,
    LocationEnumToJSON,
    LocationEnumToJSONTyped,
} from './LocationEnum';

/**
 * 
 * @export
 * @interface Household
 */
export interface Household {
    /**
     * 
     * @type {LocationEnum}
     * @memberof Household
     */
    location?: LocationEnum;
    /**
     * Number of occupants
     * @type {number}
     * @memberof Household
     */
    occupancy?: number;
    /**
     * 
     * @type {SpaceHeatingEnum}
     * @memberof Household
     */
    spaceHeating?: SpaceHeatingEnum;
    /**
     * 
     * @type {WaterHeatingEnum}
     * @memberof Household
     */
    waterHeating?: WaterHeatingEnum;
    /**
     * 
     * @type {CooktopEnum}
     * @memberof Household
     */
    cooktop?: CooktopEnum;
    /**
     * 
     * @type {Array<Vehicle>}
     * @memberof Household
     */
    vehicles?: Array<Vehicle>;
    /**
     * 
     * @type {Solar}
     * @memberof Household
     */
    solar?: Solar;
    /**
     * 
     * @type {Battery}
     * @memberof Household
     */
    battery?: Battery;
}



/**
 * Check if a given object implements the Household interface.
 */
export function instanceOfHousehold(value: object): value is Household {
    return true;
}

export function HouseholdFromJSON(json: any): Household {
    return HouseholdFromJSONTyped(json, false);
}

export function HouseholdFromJSONTyped(json: any, ignoreDiscriminator: boolean): Household {
    if (json == null) {
        return json;
    }
    return {
        
        'location': json['location'] == null ? undefined : LocationEnumFromJSON(json['location']),
        'occupancy': json['occupancy'] == null ? undefined : json['occupancy'],
        'spaceHeating': json['spaceHeating'] == null ? undefined : SpaceHeatingEnumFromJSON(json['spaceHeating']),
        'waterHeating': json['waterHeating'] == null ? undefined : WaterHeatingEnumFromJSON(json['waterHeating']),
        'cooktop': json['cooktop'] == null ? undefined : CooktopEnumFromJSON(json['cooktop']),
        'vehicles': json['vehicles'] == null ? undefined : ((json['vehicles'] as Array<any>).map(VehicleFromJSON)),
        'solar': json['solar'] == null ? undefined : SolarFromJSON(json['solar']),
        'battery': json['battery'] == null ? undefined : BatteryFromJSON(json['battery']),
    };
}

export function HouseholdToJSON(json: any): Household {
    return HouseholdToJSONTyped(json, false);
}

export function HouseholdToJSONTyped(value?: Household | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'location': LocationEnumToJSON(value['location']),
        'occupancy': value['occupancy'],
        'spaceHeating': SpaceHeatingEnumToJSON(value['spaceHeating']),
        'waterHeating': WaterHeatingEnumToJSON(value['waterHeating']),
        'cooktop': CooktopEnumToJSON(value['cooktop']),
        'vehicles': value['vehicles'] == null ? undefined : ((value['vehicles'] as Array<any>).map(VehicleToJSON)),
        'solar': SolarToJSON(value['solar']),
        'battery': BatteryToJSON(value['battery']),
    };
}

