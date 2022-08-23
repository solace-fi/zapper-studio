/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface ConvexDepositorInterface extends utils.Interface {
  functions: {
    'FEE_DENOMINATOR()': FunctionFragment;
    'crv()': FunctionFragment;
    'deposit(uint256,bool,address)': FunctionFragment;
    'deposit(uint256,bool)': FunctionFragment;
    'depositAll(bool,address)': FunctionFragment;
    'escrow()': FunctionFragment;
    'feeManager()': FunctionFragment;
    'incentiveCrv()': FunctionFragment;
    'initialLock()': FunctionFragment;
    'lockCurve()': FunctionFragment;
    'lockIncentive()': FunctionFragment;
    'minter()': FunctionFragment;
    'setFeeManager(address)': FunctionFragment;
    'setFees(uint256)': FunctionFragment;
    'staker()': FunctionFragment;
    'unlockTime()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'FEE_DENOMINATOR'
      | 'crv'
      | 'deposit(uint256,bool,address)'
      | 'deposit(uint256,bool)'
      | 'depositAll'
      | 'escrow'
      | 'feeManager'
      | 'incentiveCrv'
      | 'initialLock'
      | 'lockCurve'
      | 'lockIncentive'
      | 'minter'
      | 'setFeeManager'
      | 'setFees'
      | 'staker'
      | 'unlockTime',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'FEE_DENOMINATOR', values?: undefined): string;
  encodeFunctionData(functionFragment: 'crv', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'deposit(uint256,bool,address)',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'deposit(uint256,bool)',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(functionFragment: 'depositAll', values: [PromiseOrValue<boolean>, PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'escrow', values?: undefined): string;
  encodeFunctionData(functionFragment: 'feeManager', values?: undefined): string;
  encodeFunctionData(functionFragment: 'incentiveCrv', values?: undefined): string;
  encodeFunctionData(functionFragment: 'initialLock', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lockCurve', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lockIncentive', values?: undefined): string;
  encodeFunctionData(functionFragment: 'minter', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setFeeManager', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setFees', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'staker', values?: undefined): string;
  encodeFunctionData(functionFragment: 'unlockTime', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'FEE_DENOMINATOR', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'crv', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit(uint256,bool,address)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit(uint256,bool)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'depositAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'escrow', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'feeManager', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'incentiveCrv', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialLock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lockCurve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lockIncentive', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'minter', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setFeeManager', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setFees', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'staker', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unlockTime', data: BytesLike): Result;

  events: {};
}

export interface ConvexDepositor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConvexDepositorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    FEE_DENOMINATOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    crv(overrides?: CallOverrides): Promise<[string]>;

    'deposit(uint256,bool,address)'(
      _amount: PromiseOrValue<BigNumberish>,
      _lock: PromiseOrValue<boolean>,
      _stakeAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    'deposit(uint256,bool)'(
      _amount: PromiseOrValue<BigNumberish>,
      _lock: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    depositAll(
      _lock: PromiseOrValue<boolean>,
      _stakeAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    escrow(overrides?: CallOverrides): Promise<[string]>;

    feeManager(overrides?: CallOverrides): Promise<[string]>;

    incentiveCrv(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialLock(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    lockCurve(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    lockIncentive(overrides?: CallOverrides): Promise<[BigNumber]>;

    minter(overrides?: CallOverrides): Promise<[string]>;

    setFeeManager(
      _feeManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setFees(
      _lockIncentive: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    staker(overrides?: CallOverrides): Promise<[string]>;

    unlockTime(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  FEE_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

  crv(overrides?: CallOverrides): Promise<string>;

  'deposit(uint256,bool,address)'(
    _amount: PromiseOrValue<BigNumberish>,
    _lock: PromiseOrValue<boolean>,
    _stakeAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  'deposit(uint256,bool)'(
    _amount: PromiseOrValue<BigNumberish>,
    _lock: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  depositAll(
    _lock: PromiseOrValue<boolean>,
    _stakeAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  escrow(overrides?: CallOverrides): Promise<string>;

  feeManager(overrides?: CallOverrides): Promise<string>;

  incentiveCrv(overrides?: CallOverrides): Promise<BigNumber>;

  initialLock(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  lockCurve(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  lockIncentive(overrides?: CallOverrides): Promise<BigNumber>;

  minter(overrides?: CallOverrides): Promise<string>;

  setFeeManager(
    _feeManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setFees(
    _lockIncentive: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  staker(overrides?: CallOverrides): Promise<string>;

  unlockTime(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    FEE_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

    crv(overrides?: CallOverrides): Promise<string>;

    'deposit(uint256,bool,address)'(
      _amount: PromiseOrValue<BigNumberish>,
      _lock: PromiseOrValue<boolean>,
      _stakeAddress: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    'deposit(uint256,bool)'(
      _amount: PromiseOrValue<BigNumberish>,
      _lock: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<void>;

    depositAll(
      _lock: PromiseOrValue<boolean>,
      _stakeAddress: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    escrow(overrides?: CallOverrides): Promise<string>;

    feeManager(overrides?: CallOverrides): Promise<string>;

    incentiveCrv(overrides?: CallOverrides): Promise<BigNumber>;

    initialLock(overrides?: CallOverrides): Promise<void>;

    lockCurve(overrides?: CallOverrides): Promise<void>;

    lockIncentive(overrides?: CallOverrides): Promise<BigNumber>;

    minter(overrides?: CallOverrides): Promise<string>;

    setFeeManager(_feeManager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    setFees(_lockIncentive: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    staker(overrides?: CallOverrides): Promise<string>;

    unlockTime(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    FEE_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

    crv(overrides?: CallOverrides): Promise<BigNumber>;

    'deposit(uint256,bool,address)'(
      _amount: PromiseOrValue<BigNumberish>,
      _lock: PromiseOrValue<boolean>,
      _stakeAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    'deposit(uint256,bool)'(
      _amount: PromiseOrValue<BigNumberish>,
      _lock: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    depositAll(
      _lock: PromiseOrValue<boolean>,
      _stakeAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    escrow(overrides?: CallOverrides): Promise<BigNumber>;

    feeManager(overrides?: CallOverrides): Promise<BigNumber>;

    incentiveCrv(overrides?: CallOverrides): Promise<BigNumber>;

    initialLock(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    lockCurve(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    lockIncentive(overrides?: CallOverrides): Promise<BigNumber>;

    minter(overrides?: CallOverrides): Promise<BigNumber>;

    setFeeManager(
      _feeManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setFees(
      _lockIncentive: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    staker(overrides?: CallOverrides): Promise<BigNumber>;

    unlockTime(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    FEE_DENOMINATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    crv(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'deposit(uint256,bool,address)'(
      _amount: PromiseOrValue<BigNumberish>,
      _lock: PromiseOrValue<boolean>,
      _stakeAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    'deposit(uint256,bool)'(
      _amount: PromiseOrValue<BigNumberish>,
      _lock: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    depositAll(
      _lock: PromiseOrValue<boolean>,
      _stakeAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    escrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    incentiveCrv(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialLock(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    lockCurve(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    lockIncentive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFeeManager(
      _feeManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setFees(
      _lockIncentive: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    staker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unlockTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}