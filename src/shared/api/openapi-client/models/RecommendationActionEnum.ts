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


/**
 * The recommended action for this household to maximise their savings
 * @export
 */
export const RecommendationActionEnum = {
    SpaceHeating: 'SPACE_HEATING',
    WaterHeating: 'WATER_HEATING',
    Cooking: 'COOKING',
    Vehicle: 'VEHICLE',
    Solar: 'SOLAR',
    Battery: 'BATTERY',
    FullyElectrified: 'FULLY_ELECTRIFIED'
} as const;
export type RecommendationActionEnum = typeof RecommendationActionEnum[keyof typeof RecommendationActionEnum];


export function instanceOfRecommendationActionEnum(value: any): boolean {
    for (const key in RecommendationActionEnum) {
        if (Object.prototype.hasOwnProperty.call(RecommendationActionEnum, key)) {
            if (RecommendationActionEnum[key as keyof typeof RecommendationActionEnum] === value) {
                return true;
            }
        }
    }
    return false;
}

export function RecommendationActionEnumFromJSON(json: any): RecommendationActionEnum {
    return RecommendationActionEnumFromJSONTyped(json, false);
}

export function RecommendationActionEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecommendationActionEnum {
    return json as RecommendationActionEnum;
}

export function RecommendationActionEnumToJSON(value?: RecommendationActionEnum | null): any {
    return value as any;
}

export function RecommendationActionEnumToJSONTyped(value: any, ignoreDiscriminator: boolean): RecommendationActionEnum {
    return value as RecommendationActionEnum;
}

