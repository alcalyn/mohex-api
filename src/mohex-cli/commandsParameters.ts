export type GameParameters = {
    allow_swap?: boolean;
    on_little_golem?: boolean;
    game_time?: string;
};

export type MohexParameters = {
    backup_ice_info?: boolean;
    extend_unstable_search?: boolean;
    lock_free?: boolean;
    lazy_delete?: boolean;
    perform_pre_search?: boolean;
    prior_pruning?: boolean;
    ponder?: boolean;
    reuse_subtree?: boolean;
    search_singleton?: boolean;
    use_livegfx?: boolean;
    use_parallel_solver?: boolean;
    use_rave?: boolean;
    use_root_data?: boolean;
    use_time_management?: boolean;
    weight_rave_updates?: boolean;
    virtual_loss?: boolean;

    bias_term?: string;
    expand_threshold?: string;
    fillin_map_bits?: string;
    first_play_urgency?: string;
    playout_global_gamma_cap?: string;
    knowledge_threshold?: string;
    number_playouts_per_visit?: string;
    max_games?: string;
    max_memory?: string;
    max_nodes?: string;
    max_time?: string;
    move_select?: string;
    num_threads?: string;
    progressive_bias?: string;
    vcm_gamma?: string;
    randomize_rave_frequency?: string;
    rave_weight_final?: string;
    rave_weight_initial?: string;
    time_control_override?: string;
    uct_bias_constant?: string;
};
