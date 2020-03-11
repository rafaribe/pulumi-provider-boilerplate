// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Random extends pulumi.CustomResource {
    /**
     * Get an existing Random resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RandomState, opts?: pulumi.CustomResourceOptions): Random {
        return new Random(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'xyz:index:Random';

    /**
     * Returns true if the given object is an instance of Random.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Random {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Random.__pulumiType;
    }

    public readonly length!: pulumi.Output<number>;
    public /*out*/ readonly result!: pulumi.Output<string>;

    /**
     * Create a Random resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RandomArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RandomArgs | RandomState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as RandomState | undefined;
            inputs["length"] = state ? state.length : undefined;
            inputs["result"] = state ? state.result : undefined;
        } else {
            const args = argsOrState as RandomArgs | undefined;
            if (!args || args.length === undefined) {
                throw new Error("Missing required property 'length'");
            }
            inputs["length"] = args ? args.length : undefined;
            inputs["result"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Random.__pulumiType, name, inputs, opts);
    }
}

export interface RandomState {
    readonly length?: pulumi.Input<number>;
    readonly result?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Random resource.
 */
export interface RandomArgs {
    readonly length: pulumi.Input<number>;
}
