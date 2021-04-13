import {AccessTokenEntity} from "../access-token.entity";
import {Oauth2PayloadInterface, Oauth2PayloadType} from "./oauth2-payload.interface";
import { UserInterface } from './user.interface';

/**
 * Represents a UserPayload
 */
export class UserPayload implements Oauth2PayloadInterface {
    /**
     * The current payload type should not be changed as it should always be user in this case
     */
    readonly type: Oauth2PayloadType = Oauth2PayloadType.USER;

    constructor(
        public readonly accessToken: AccessTokenEntity,
        public readonly id: number,
        user: UserInterface
    ) {
        for (let k in user) { this[k] = user[k] }
    }
}
