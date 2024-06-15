# Exercice 1: Labyrinthe

## Description

Vous êtes dans un labyrinthe. Vous devez trouver le nombre minimum de mouvements pour atteindre chaque cellule depuis le point de départ, et afficher ces nombres dans le labyrinthe initial.

Le nombre de mouvements est représenté par un caractère : `0-9` puis `A-Z` (`A=10`, `B=11`, ..., `Z=35`).

Vous pouvez vous déplacer d'une cellule à une cellule voisine qui n'est pas un mur dans l'une des quatre directions : gauche, droite, haut ou bas. Le labyrinthe est périodique : si vous allez à gauche, vous apparaissez à droite s'il n'y a pas de mur, et vice versa, de même pour le haut/bas.

Il peut y avoir des points inaccessibles.

## Entrée

Le labyrinthe d'entrée est constitué de `#` pour les murs, `.` pour les espaces libres et `S` pour la position de départ.

## Sortie

La sortie doit être constituée de `#` pour les murs, `.` pour les points inaccessibles, et de nombres `0-9`, `A-Z`.

## Exemple

### Entrée

10 5  
##########  
#S.......#  
##.#####.#  
##.#.....#  
##########  

### Sortie

##########  
#01234567#  
##2#####8#  
##3#DCBA9#  
##########  
