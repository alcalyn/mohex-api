type MohexCommand =
    'add-fillin-to-sgf' |
    'all_legal_moves' |
    'benzene-license' |
    'boardsize' |
    'book-close' |
    'book-counts' |
    'book-depths' |
    'book-dump-polarized-leafs' |
    'book-expand' |
    'book-import-solved' |
    'book-increase-width' |
    'book-open' |
    'book-priorities' |
    'book-refresh' |
    'book-scores' |
    'book-set-value' |
    'book-stat' |
    'book-visualize' |
    'clear_board' |
    'compute-dominated' |
    'compute-dominated-cell' |
    'compute-fillin' |
    'compute-inferior' |
    'compute-reversible' |
    'compute-vulnerable' |
    'dfpn-clear-tt' |
    'dfpn-close-db' |
    'dfpn-db-stat' |
    'dfpn-dump-db' |
    'dfpn-dump-tt' |
    'dfpn-evaluation-info' |
    'dfpn-get-bounds' |
    'dfpn-get-pv' |
    'dfpn-get-state' |
    'dfpn-get-work' |
    'dfpn-merge-db' |
    'dfpn-open-db' |
    'dfpn-restore-db' |
    'dfpn-restore-tt' |
    'dfpn-solve-state' |
    'dfpn-solver-find-winning' |
    'dfs-clear-tt' |
    'dfs-close-db' |
    'dfs-db-stat' |
    'dfs-get-histogram' |
    'dfs-get-pv' |
    'dfs-get-state' |
    'dfs-open-db' |
    'dfs-solve-state' |
    'dfs-solver-find-winning' |
    'encode-pattern' |
    'eval-resist' |
    'eval-resist-cells' |
    'eval-twod' |
    'exec' |
    'final_score' |
    'find-comb-decomp' |
    'find-split-decomp' |
    'genmove' |
    'gogui-interrupt' |
    'group-get' |
    'handbook-add' |
    'hexgui-analyze_commands' |
    'known_command' |
    'list_commands' |
    'loadsgf' |
    'mohex-bounds' |
    'mohex-cell-stats' |
    'mohex-do-playouts' |
    'mohex-find-top-moves' |
    'mohex-gamma-values' |
    'mohex-get-pv' |
    'mohex-mark-prunable' |
    'mohex-pattern-match-on-cell' |
    'mohex-playout-global-weights' |
    'mohex-playout-local-weights' |
    'mohex-playout-move' |
    'mohex-playout-play-pct' |
    'mohex-playout-weights' |
    'mohex-prior-values' |
    'mohex-rave-values' |
    'mohex-save-tree' |
    'mohex-search-statistics' |
    'mohex-self-play' |
    'mohex-values' |
    'name' |
    'param_book' |
    'param_book_builder' |
    'param_dfpn' |
    'param_dfpn_db' |
    'param_dfs' |
    'param_dfs_db' |
    'param_game' |
    'param_mohex' |
    'param_mohex_policy' |
    'param_player_board' |
    'param_player_ice' |
    'param_player_vc' |
    'param_solver_board' |
    'param_solver_ice' |
    'param_solver_vc' |
    'play' |
    'play-game' |
    'protocol_version' |
    'quit' |
    'reg_genmove' |
    'showboard' |
    'time_left' |
    'undo' |
    'vc-between-cells-full' |
    'vc-between-cells-semi' |
    'vc-build' |
    'vc-build-incremental' |
    'vc-builder-stats' |
    'vc-connected-to-full' |
    'vc-connected-to-semi' |
    'vc-get-mustplay' |
    'vc-intersection-full' |
    'vc-intersection-semi' |
    'vc-maintenance-responses' |
    'vc-set-stats' |
    'vc-undo-incremental' |
    'vc-union-full' |
    'vc-union-semi' |
    'version'
;

export default MohexCommand;
