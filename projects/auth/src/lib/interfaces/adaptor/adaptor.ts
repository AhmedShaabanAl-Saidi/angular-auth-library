import { AfterAdaptot } from "./after-adaptot";
import { DeforeAdaptot } from "./defore-adaptot";

export interface Adaptor {
    adapt(data: DeforeAdaptot): AfterAdaptot;
}
