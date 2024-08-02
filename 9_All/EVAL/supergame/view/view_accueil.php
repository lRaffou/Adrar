<!-- VUE DE LA PAGE D'ACCUEIL -->
<!-- 1) Dans le fichier view_accueil.php, créer une fonction renderView() qui affiche un formulaire
permettant d’enregistrer un nouveau joueur, et une section qui permettra d’afficher la liste
des joueurs avec leur pseudo et leur score (NOTE : vous créerez ce fichier, au choix en
procédural, ou en orienté objet) -->

<?php
function renderView($players = []) {
    ?>
    <div class="container">
        <h1>Bienvenue sur SuperGame</h1>
        
        <!-- Formulaire d'enregistrement d'un nouveau joueur -->
        <section class="register-form">
            <h2>Enregistrer un nouveau joueur</h2>
            <form action="register.php" method="POST">
                <div class="form-group">
                    <label for="pseudo">Pseudo :</label>
                    <input type="text" id="pseudo" name="pseudo" required>
                </div>
                <button type="submit">Enregistrer</button>
            </form>
        </section>
        
        <!-- Liste des joueurs -->
        <section class="players-list">
            <h2>Liste des joueurs</h2>
            <?php if (empty($players)): ?>
                <p>Aucun joueur enregistré pour le moment.</p>
            <?php else: ?>
                <ul>
                    <?php foreach ($players as $player): ?>
                        <li>
                            <?php echo htmlspecialchars($player['pseudo']); ?> - 
                            Score: <?php echo htmlspecialchars($player['score']); ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
        </section>
    </div>
    <?php
}
?>






































function renderView($players = []) {
    ?>
    <div class="container">
        <h1>Bienvenue sur SuperGame</h1>
        
        <!-- Formulaire d'enregistrement d'un nouveau joueur -->
        <section class="register-form">
            <h2>Enregistrer un nouveau joueur</h2>
            <form action="register.php" method="POST">
                <div class="form-group">
                    <label for="pseudo">Pseudo :</label>
                    <input type="text" id="pseudo" name="pseudo" required>
                </div>
                <button type="submit">S'enregistrer</button>
            </form>
        </section>

        <!-- Liste des joueurs -->
        <section class="players-list">
            <h2>Liste des joueurs</h2>
            <?php if (empty($players)): ?>
                <p>Aucun joueur enregistré pour le moment.</p>
            <?php else: ?>
                <ul>
                    <?php foreach ($players as $player): ?>
                        <li>
                            <?php echo htmlspecialchars($player['pseudo']); ?> - 
                            Score : <?php echo htmlspecialchars($player['score']); ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
        </section>
    </div>
    <?php
}
?>
